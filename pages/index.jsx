import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form'; 

import Head from 'next/head';
import {
  getDateAdded,
  dataStringfy,
  dataSaveOnStorage,
  dataParse,
  getItemOnStorage,
} from '../utils/date';

import * as S from '../styles/styles';

export default function Home() {
  const [links, setLinks] = useState([]);
  const { register, handleSubmit, watch, errors, reset } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const { name, link } = await data;
    const added = getDateAdded();

    setLinks([
      ...links,
      {
        id: uuidv4(),
        name: name,
        link: link,
        date: added,
      },
    ]);
    event.target.reset();
  };

  const saveLinksOnStorage = (links) => {
    const data = dataStringfy(links);
    dataSaveOnStorage(data);
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
      <Head>
        <title>Save Open Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.main>
        <S.form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label name="name" id="name">
              Name
            </label>
            <input
              placeholder="name for the link"
              type="text"
              name="name"
              id="name"
              ref={register({ maxLength: 20, required: true })}
            />
            {errors.name && (
              <S.error>This field is required and max length is 20</S.error>
            )}
          </div>
          <div className="input-container">
            <label name="link" id="link">
              {' '}
              Link{' '}
            </label>
            <input
              placeholder="link addresss"
              type="text"
              name="link"
              id="link"
              ref={register({ minLength: 5, required: true })}
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
                <a target="_blank" href={element.link}>
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
