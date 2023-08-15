import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const AccordionComponent = () => {
    const [sections, setSections] = useState([]);
    const [newSectionHeader, setNewSectionHeader] = useState('');
    const [newSectionDetails, setNewSectionDetails] = useState('');

    const handleAddSection = () => {
        const newSection = {
            header: newSectionHeader,
            details: newSectionDetails,
        };

        setSections([...sections, newSection]);
        setNewSectionHeader('');
        setNewSectionDetails('');
    };

    return (

        <div className='containerDiv'>
            <div class="row" className='accordian'>
                <div class="col-md-4" className='addSection' style={{ border: "2px solid black" }}>
                   <h5>Add Section</h5>
                   <label style={{display:"block"}} >Section Header</label>
                    <InputText
                        value={newSectionHeader}
                        onChange={(e) => setNewSectionHeader(e.target.value)}
                    />
                   <label style={{display:"block", marginTop:"20px"}} >Section Details</label>
                    <textarea
                        value={newSectionDetails}
                        onChange={(e) => setNewSectionDetails(e.target.value)}
                    />
                    <Button style={{display:"block" ,marginTop:"15px"}} class="btn btn-primary" label="Add" onClick={handleAddSection} />

                </div>
                <div class="col-md-8 "style={{color:"black"}} >
                    <Accordion   style={{border:"2px solid black"}}>
                        {sections.map((section, index) => (
                            <AccordionTab class="accordion_header active"  style={{border:"2px solid black",color:"black"}} key={index} header={section.header}>
                                <div  class="active">{section.details}</div>
                            </AccordionTab>
                        ))}
                    </Accordion>

                </div>
            </div>
        </div>
    );
};

export default AccordionComponent;
