import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { showToast } from '../components/ToastAnimated';
import { ToastContainerStyle } from '../components/ToastAnimated/styles';
import Trash from '../public/icons8-trash.svg';
import * as S from '../styles/styles';
import { dataParse, dataSaveOnStorage, dataStringfy, getFormatedDate, getItemOnStorage } from '../utils/date';

export default function Home() {
  const [cardLinks, setCardLinks] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();
  const [isAnimation, setAnimation] = useState(false);

  const saveLinksOnStorage = (links = cardLinks) => {
    const data = dataStringfy(links);
    dataSaveOnStorage(data);

    showToast('The links have been saved!');
  };

  const onSubmit = async (data, event) => {
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
    const { id } = target;
    const undeletedLinks = cardLinks?.filter((item) => !(item.id === id));
    setCardLinks(undeletedLinks);
  };

  const getStorageLinks = () => {
    const dataString = getItemOnStorage('links');
    const linksOnStore = dataParse(dataString);

    if (!linksOnStore) return;
    setCardLinks(linksOnStore);
  };

  useEffect(getStorageLinks, []);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, [isAnimation]);

  return (
    <>
      <ToastContainerStyle />
      <div>
        <S.main>
          <S.form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <label name="name" id="name">
                Name
              </label>
              <input
                placeholder="Name of a URL Link"
                type="text"
                name="name"
                id="name"
                ref={register({ maxLength: 50, required: true })}
              />
              {errors.name && (
                <S.error>This field is required and max length is 50</S.error>
              )}
            </div>
            <div className="input-container">
              <label name="link" id="link">
                {' '}
                Link{' '}
              </label>
              <input
                placeholder="Web page link or URL"
                type="text"
                name="link"
                id="link"
                ref={register({ minLength: 2, required: true })}
              />
              {errors.link && (
                <S.error>This field is required and min length is 5</S.error>
              )}
            </div>
            <S.div>
              <S.button type="submit">Insert</S.button>
              <S.button
                type="button"
                onClick={() => saveLinksOnStorage(cardLinks)}>
                Save
              </S.button>
            </S.div>
          </S.form>
          <S.section isAnimation={isAnimation}>
            {cardLinks[0] && <S.hr />}
            {cardLinks.map((link) => (
              <div className="container" key={link.id}>
                <span>
                  <a target="_blank" rel="noreferrer" href={link.link}>
                    {link.name}
                  </a>
                  <img
                    id={link.id}
                    onClick={deleteLink}
                    src={Trash}
                    alt="delete link"
                  />
                </span>
                <div className="added">
                  <p>Added: {link.date}</p>
                </div>
              </div>
            ))}
          </S.section>
        </S.main>
        <S.header />
      </div>
    </>
  );
}
