import React,{useState,useEffect} from 'react';
import MainTable from './MainTable';
import {Button,ButtonGroup,Container,Row,Col} from 'react-bootstrap';
import '../index.css';

export default function Main() {
    let jsonData = require('../MOCK_DATA.json');
    const [filteredData,setFilteredData] = useState(jsonData);
    const [section,setSection] = useState('');

    useEffect(() => {
        if(section.length>0){
            setFilteredData(jsonData.filter(data=>data.section===section))
        }else{
            setFilteredData(jsonData)
        }   
    },[section])

    const sectionButtons =()=>{
        const uniqueSection = jsonData.map(a=>a.section).filter((val, id, array) => {
            return array.indexOf(val) === id; });

        return(
            <>
            <ButtonGroup size='sm' >
                <Button 
                variant="secondary" 
                onClick={()=>setSection('')}>
                    All
                </Button>

            {uniqueSection.map((filteredSec,id)=>{
                return(
                    <Button
                    key={id} 
                    variant="secondary" 
                    onClick={()=>setSection(filteredSec)}>
                        {filteredSec}
                    </Button>
            )})}
            </ButtonGroup>
            </>
        )}

    return (
        <Container >
            <Row >
                <Col ><h2>Coding Challenge</h2></Col>
                <Col>{sectionButtons()}</Col>
                <Col><MainTable data={filteredData}/></Col>
            </Row>
            
        </Container>
    )
}
