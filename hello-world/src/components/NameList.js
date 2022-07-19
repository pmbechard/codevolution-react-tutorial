import React from 'react';
import Person from './Person';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Jack',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Jill',
      age: 35,
      skill: 'Vue',
    },
    {
      id: 3,
      name: 'Joe',
      age: 25,
      skill: 'Angular',
    },
  ];
  const personsList = persons.map((person) => <Person person={person} />);
  return <div>{personsList}</div>;
}

export default NameList;
