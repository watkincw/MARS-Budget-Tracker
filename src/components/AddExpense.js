import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
// Bootstrap
import { Form, Row, Col, Button } from 'react-bootstrap';

function AddExpense() {
    const { expenses, dispatch } = useContext(AppContext);
    // check the console for data
    console.log('Current expenses state: ', expenses);

    
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [id, setId] = useState(expenses.length);
    const [key, setKey] = useState(expenses.length);
    
    const addExpense = (e) => {
        // prevent the broswer from refreshing on submit
        e.preventDefault();

        // if this is the first expense being added, remove the placeholder expense
        if (expenses[0].name === 'No Expenses yet...') {
            expenses.pop();
        }

        setId(id + 1);
        setKey(key + 1);
        
        const expense = {
            id: id,
            key: key,
            name: name,
            cost: parseInt(cost)
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    return (
        <div>
            <Form onSubmit={addExpense}>
                <Row>
                    <Col md>
                        <Form.Group>
                            <Form.Label>Expense:</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group>
                            <Form.Label>Cost:</Form.Label>
                            <Form.Control
                                required
                                type='number'
                                id='cost'
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button className='mt-4' type='submit'>Add Expense</Button>
            </Form>
        </div>
    );
}

export default AddExpense;
