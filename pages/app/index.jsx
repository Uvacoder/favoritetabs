import { lazy, Suspense, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Header } from '../../components/Header/Header';
import { showToast } from '../../components/ToastAnimated';
import { ToastContainerStyle } from '../../components/ToastAnimated/styles';
import { useLocalStorage } from '../../hooks/UseLocalStorage/useLocalStorage';
import * as S from '../../styles/app/styles';
import { getFormatedDate } from '../../utils/date';

const CardLinks = lazy(() => import('../../components/CardLinks'));
export default function Home() {
  const [cardLinks, setCardLinks] = useState([]);
  const [state, setSate] = useLocalStorage('links', cardLinks);

  const {
    register,
    handleSubmit,
    errors,
    reset,
  } = useForm();

  const saveLinksOnStorage = (links = cardLinks) => {
    setSate(links);

    showToast('The links have been saved!');
  };

  const handleFormSubmit = async (data, event) => {
    event.preventDefault();
    event.stopPropagation();

    const { name, link } = await data;
    
    const date = getFormatedDate();
    
    setCardLinks([
      ...cardLinks,
      {
        id: uuidv4(),
        name,
        link,
        date,
      },
    ]);
    
    reset();
  };

  const deleteLink = ({ target }) => {
    const updatedLinks = cardLinks?.filter((item) => !(item?.id === target?.id));
    setCardLinks(updatedLinks);
  };

  const getStoredLinks = () => setCardLinks(state);

  useEffect(getStoredLinks, [state]);

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
            <S.Button
              type="button"
              onClick={() => saveLinksOnStorage(cardLinks)}>
              Save
            </S.Button>
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
