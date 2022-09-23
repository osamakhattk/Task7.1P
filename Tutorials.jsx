import React from 'react';
import './Tutorials.css'
import { Card, Image } from 'semantic-ui-react'

const Tutorials = () => (
    <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Random Tutorial</Card.Header>
            <Card.Meta>Published in 2016</Card.Meta>
            <Card.Description>
                This tutorial is only for a test.
            </Card.Description>
        </Card.Content>
    </Card>
)

export default Tutorials 