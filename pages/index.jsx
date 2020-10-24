import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { showToast } from '../components/ToastAnimated';
import { ToastContainerStyle } from '../components/ToastAnimated/styles';
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
                  <div>
                    <svg
                      id={link.id}
                      onClick={deleteLink}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px">
                      <path d="M2 3H22V5H2zM4 6v16.5C4 23.3 4.7 24 5.5 24h13.1c.8 0 1.5-.7 1.5-1.5V6H4zM11 22h-1V9h1V22zM14 22h-1V9h1V22zM17 22h-1V9h1V22zM8 22H7V9h1V22z" />
                      <path
                        strokeWidth="2.08"
                        d="M16,4H8V3.3C8,2,9,1,10.3,1h3.5C15,1,16,2,16,3.3V4z"
                      />
                    </svg>
                  </div>
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
