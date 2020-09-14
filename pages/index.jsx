import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';

import * as S from '../styles/styles';

export default function Home() {
  const [links, setLinks] = useState([]);

  const parsefy = (links) => JSON.stringify(links);
  const saveOnStorage = (items) => window.localStorage.setItem('links', items);

  const handleSubmit = (event, links) => {
    event.preventDefault();
    
    const nameUrl = event.target?.name?.value;
    const url = event.target?.name?.value;

    setLinks([
      ...links,
      {
        id: uuidv4(),
        name: nameUrl,
        link: url,
      },
    ]);
    event.target.name.value = '';
    event.target.link.value = '';
  };

  const saveLinksOnStorage = (links) => {
    const data = parsefy(links);
    saveOnStorage(data);
  };

  const deleteLink = ({ target }) => {
    const { id } = target;
    const undeletedLinks = links?.filter((item) => !(item.id === id));
    setLinks(undeletedLinks);
    saveLinksOnStorage(undeletedLinks);
  };

  const getStorageLinks = () => {
    const linksString = window.localStorage.getItem('links');
    const oldLinks = JSON.parse(linksString);

    if (!oldLinks) return;
    setLinks(oldLinks);
  };

  useEffect(getStorageLinks, []);

  return (
    <div>
      <Head>
        <title>Save Open Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.main>
        <S.form onSubmit={(event) => handleSubmit(event, links)}>
          <label name="name" id="name">
            Name
          </label>
          <input
            placeholder="name for the link"
            required
            type="text"
            name="name"
            id="name"
          />
          <label name="link" id="link">
            Link
          </label>
          <input
            placeholder="link addresss"
            required
            type="text"
            name="link"
            id="link"
          />
          <S.div>
            <S.button type="submit">Inserir</S.button>
            <S.button type="button" onClick={() => saveLinksOnStorage(links)}>
              Save
            </S.button>
          </S.div>
        </S.form>
        <S.section>
          {links && <S.hr />}
          {links ? (
            links.map((element) => (
              <span key={element.id}>
                <a href={element.link}>{element.name}</a>
                <button id={element.id} onClick={deleteLink}>
                  delete
                </button>
              </span>
            ))
          ) : (
            <p>Nenhum item encontrado.</p>
          )}
        </S.section>
      </S.main>
    </div>
  );
}
