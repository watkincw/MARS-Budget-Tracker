import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// Bootstrap
import { Form, Row, Col } from 'react-bootstrap';
// stylesheet
import './style.css';

function Values() {
    const { budget, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const totalSpent = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div>
            <Form>
                <Row>
                    <Col md>
                        <Form.Label>Starting Budget: ${budget}</Form.Label>
                    </Col>
                    <Col md>
                        <Form.Label>Remaining: ${budget - totalExpenses}</Form.Label>
                    </Col>
                    <Col md>
                        <Form.Label>Spent: ${totalSpent}</Form.Label>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default Values;
