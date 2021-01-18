import React from 'react';
import styled from 'styled-components';
import { devices } from '../helpers/devices';
import Alex from '../static/images/alex.jpg';
import Richard from '../static/images/richard.jpg';
import HrLine from '../ui/HrLine';

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 6rem;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
`;

const Container = styled.div`
  display: flex;
  margin-top: 6rem;
  justify-content: center;

  div {
    width: 350px;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
    div {
      padding-right: 0;
    }
  }
`;

const Link = styled.a`
  color: #0dad8d;
  text-decoration: none;
  font-weight: 600;
`;

const PersonInfo = styled.div`
  padding: 2rem 0;
  text-align: center;
`;

const Employees = () => {
  return (
    <>
      <Wrapper id='team'>
        <h1>Anställda</h1>
        <HrLine />
        <Container>
          <div>
            <Image src={Richard} alt='richard' />
            <PersonInfo>
              <Link href='CV_Richard.pdf'>Richard Brown</Link>
              <p>Grundare / Senior utvecklare</p>
            </PersonInfo>
          </div>
          <div>
            <Image src={Alex} alt='alexandra' />
            <PersonInfo>
              <Link href='CV_alex.pdf'>Alexandra Onegård</Link>
              <p>Webbutvecklare</p>
            </PersonInfo>
          </div>
        </Container>
      </Wrapper>
      <hr />
    </>
  );
};

export default Employees;
