'use client';

import styled from 'styled-components';

export const ContentContainer = styled.div`
  padding: 50px;
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;

  flex-direction: column-reverse;
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

export const Info = styled.div`
  flex: 1;
  padding-right: 50px;
	text-align: left;

  h1 {
    font-size: 36px;
    margin: 20px 0;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
		text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
