'use client';

import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 750px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const HeaderContainer = styled.header`
  min-height: 80px;
  display: flex;

  @media (max-width: 767px) {
    min-height: auto;
    display: initial;
  }
`;

export const Logo = styled.a`
  color: #5d5d5d;
  font-style: italic;
  text-transform: uppercase;
  font-size: 20px;

  @media (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    text-align: center;
    gap: 10px;
  }
`;

export const LinkItem = styled.li`
  margin-left: 30px;
  color: #5d5d5d;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 767px) {
    margin-left: auto;
  }
`;
