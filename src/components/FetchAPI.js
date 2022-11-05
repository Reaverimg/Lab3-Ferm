import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import {
  Icon,
  CardTitle,
  Row,
  Col,
  Card,
  Container,
  Section,
  CardPanel,
  Link,
} from "react-materialize";
import React, { useEffect, useState } from "react";
export default function FetchAPI() {
  const [APIData, setAPIData] = useState([]);
  const baseURL = "https://636369c537f2167d6f78b4a2.mockapi.io/ListOfUser";
  const fetchAPI = () => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status: ${response.status}");
        }
        return response.json();
      })
      // .then(data => setAPIData(data))
      .then((json) => {
        console.log(json);
        setAPIData(json);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Section>
      <Container maxWidth="sm">
        <Row>
          {APIData.map((items) => (
              <Col key={items.id} m={4} s={12}>
                <Card
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image={items.img} reveal waves="light" />}
                  reveal={<p>{items.title}</p>}
                  revealIcon={<Icon>more_vert</Icon>}
                  title={items.name}
                ></Card>
              </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
