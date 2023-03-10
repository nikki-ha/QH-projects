import React, {useState} from "react";
import '../styles/browse.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const BrowseScreen = () => {
    const [query, setQuery] = useState("");

    const defaultColDef = {
        flex: 1,
        sortable: true,
        resizable: true,
        filter: true,
        
    };

    const rowHeight = 48;

    const SimpleComp = p => {return(<><button type="button" class="btn btn-secondary">Contact</button></>)}

    const containerStyle = { width: '100%', height: '100%' };

    const rowData = [
        {Title: 'Research Study with Trans, Nonbinary or Genderqueer Individuals who Have Been Pregnant', ' ' : '', Location: 'Los Angeles, CA'},
        {Title: 'Minority Stress & Trauma Lab', ' ' : '', Location: 'Syracuse, NY'},
        {Title: 'The Impacts of School Experiences and Environment on LGBQ+ Identity Development', ' ' : '', Location: 'Online survey'},
        {Title: 'Robert Wood Johnson Foundation Evidence for Action Program', ' ' : '', Location: 'Washington, D.C.'},
        {Title: 'Concerning Experiences of TGNCNB+ People in Healthcare', ' ' : '', Location: 'New York, NY'},
        {Title: 'Greenburgh LGBTQ+ Needs Assessment', ' ' : '', Location: 'Greenburgh, NY'},
        {Title: 'Promoting Trauma Recovery for Trans and Gender Diverse Survivors', ' ' : '', Location: 'New York, NY'}
    ];
    const colDefs = [
        {field: 'Title', type: 'leftAligned'},
        {field: '', cellRenderer: SimpleComp, type: 'rightAligned'},
        {field: 'Location', type: 'leftAligned'}
    ];

    return (
        <>
            <h2 id="header-text">Browse</h2>
            <input type="text" class="search" value={query} onChange={e => {setQuery(e.target.value)}}/>
            <input type="submit" value="search" />
            <p>0 results found for {query}.</p>
            <div style={containerStyle}>
            <div className='ag-theme-alpine' style={{height:500}}>
                <AgGridReact
                    rowData = {rowData}
                    columnDefs = {colDefs}
                    defaultColDef={defaultColDef}
                    rowHeight={rowHeight}
                />
            </div>
            </div>
            

        </>
        
    )
}

export default BrowseScreen;