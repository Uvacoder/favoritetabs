import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import * as S from '../styles/styles';
import { dataParse, dataSaveOnStorage, dataStringfy, getDateAdded, getItemOnStorage } from '../utils/date';

export default function Home() {
  const [links, setLinks] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  const saveLinksOnStorage = (links) => {
    const data = dataStringfy(links);
    dataSaveOnStorage(data);
  };

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const { name, link } = await data;
    const date = getDateAdded();

    setLinks([
      ...links,
      {
        id: uuidv4(),
        name: name,
        link: link,
        date,
      },
    ]);
    event.target.reset();
  };

  const deleteLink = ({ target }) => {
    const { id } = target;
    const undeletedLinks = links?.filter((item) => !(item.id === id));
    setLinks(undeletedLinks);

    saveLinksOnStorage(undeletedLinks);
  };

  const getStorageLinks = () => {
    const dataString = getItemOnStorage('links');
    const linksOnStore = dataParse(dataString);

    if (!linksOnStore) return;
    setLinks(linksOnStore);
  };

  useEffect(getStorageLinks, []);

  return (
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
            <S.button type="button" onClick={() => saveLinksOnStorage(links)}>
              Save
            </S.button>
          </S.div>
        </S.form>
        <S.section>
          {links[0] && <S.hr />}
          {links.map((element) => (
            <div className="container" key={element.id}>
              <span>
                <a target="_blank" rel="noreferrer" href={element.link}>
                  {element.name}
                </a>
                <button id={element.id} onClick={deleteLink}></button>
              </span>
              <div className="added">
                <p>Added: {element.date}</p>
              </div>
            </div>
          ))}
        </S.section>
      </S.main>
      <S.header></S.header>
    </div>
  );
}
