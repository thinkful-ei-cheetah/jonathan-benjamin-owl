import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.js';
import renderer from 'react-test-renderer';

const participants = [
    {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }
]

//this is the test case
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Stage onStage={participants} />, div);

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Stage onStage={participants}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
