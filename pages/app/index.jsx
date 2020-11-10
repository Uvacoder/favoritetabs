import { lazy, memo, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/Header/Header';
import { showToast } from '../../components/ToastAnimated';
import { ToastContainerStyle } from '../../components/ToastAnimated/styles';
import { useLocalStorage } from '../../hooks/UseLocalStorage/useLocalStorage';
import * as S from '../../styles/app/styles';
import { getFormatedDate } from '../../utils/date';

const CardLinks = lazy(() => import('../../components/CardLinks'));

function Home() {
  const [cardLinks, setCardLinks] = useLocalStorage('links', []);

  const {
    register,
    handleSubmit,
    errors,
    reset,
  } = useForm();

  const saveLinksOnStorage = () => showToast('The links have been saved!');

  const handleFormSubmit = useCallback((data, event) => {
    (async () => {
      event.preventDefault();
      const { name, link } = await data;
      const date = getFormatedDate();
      
      setCardLinks((links) => [...links, { id: uuidv4(), name, link, date }]);
      
      reset();
    })()
  }, [reset]);

  const deleteLink = useCallback(
    ({ target }) => {
      const updatedLinks = cardLinks?.filter(
        (item) => !(item?.id === target?.id)
      );
      setCardLinks(updatedLinks);
    },
    [cardLinks]
  );

  const downloadLinks = useRef(null)

  const exportJson = () => {
    const json = JSON.stringify(cardLinks);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob)
    downloadLinks.current.download = 'backup.json';
    downloadLinks.current.href = url;
  }

  return (
    <S.Layout>
      <Header />

      <ToastContainerStyle />

      <S.Main>
        <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="input-container">
            <label name="name" id="name">
              Name
            </label>
            <input
              placeholder="Name of a URL Link"
              type="text"
              name="name"
              id="name"
              ref={register({
                maxLength: 50,
                required: true,
              })}
            />
            {errors.name && (
              <S.Error>This field is required and max length is 50</S.Error>
            )}
          </div>
          <div className="input-container">
            <label name="link" id="link">
              Link
            </label>
            <input
              placeholder="Web page link or URL"
              type="text"
              name="link"
              id="link"
              ref={register({
                minLength: 2,
                required: true,
              })}
            />
            {errors.link && (
              <S.Error>This field is required and min length is 5</S.Error>
            )}
          </div>

          <S.ContainerFormButtons>
            <S.Button type="submit">Insert</S.Button>
            <S.Download onClick={exportJson} ref={downloadLinks} download>
              Export
            </S.Download>
          </S.ContainerFormButtons>
        </S.Form>

        <Suspense fallback={<strong>Loading...</strong>}>
          <CardLinks cardLinks={cardLinks} deleteLink={deleteLink} />
        </Suspense>
      </S.Main>

      <S.Footer />
    </S.Layout>
  );
}

export default Home;
