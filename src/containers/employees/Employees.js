import React from 'react';
import Alex from '../../static/images/alex.jpg';
import Richard from '../../static/images/richard.jpg';
import HrLine from '../../ui/HrLine';
import { Container, Image, Link, PersonInfo, Wrapper } from './EmployeesStyle';

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
