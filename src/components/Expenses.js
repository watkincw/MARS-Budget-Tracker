import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// Bootstrap
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
// stylesheet
import './style.css';

function Expenses(props) {
    const { expenses, dispatch } = useContext(AppContext);

    const onDelete = () => {
        dispatch({
            type:'DELETE_EXPENSE',
            payload: props.id
        });
    }

    return (
        <div>
            <Card style={{color: '#000'}}>
                <Row>
                    <Col>
                        <h2>Expense</h2>
                    </Col>
                    <Col>
                        <h2>Cost</h2>
                    </Col>
                    <Col>
                        <h2>Delete</h2>
                    </Col>
                </Row>
                <ListGroup variant='flush'>
                    {expenses.map((expense) => (
                        <ListGroup.Item key={expense.key} id={expense.id} name={expense.name} cost={expense.cost}>
                            <Row>
                                <Col md>
                                    <div className='col' style={{textAlign: 'center'}}>
                                        {expense.name}
                                    </div>
                                </Col>
                                <Col md>
                                    <div className='col' style={{textAlign: 'center'}}>
                                        ${expense.cost}
                                    </div>                                
                                </Col>
                                <Col md>
                                    <Button className='btn-danger' onClick={onDelete}>Delete</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </div>
    );
}

export default Expenses;
