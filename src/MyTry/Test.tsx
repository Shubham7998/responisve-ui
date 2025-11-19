import React from 'react';
import './Test.css';

export default function Test() {

    function Table() {
        return (
            <table>
                <thead>
                    <th></th>
                    <th>Positive</th>
                    <th>Negative</th>
                </thead>
                <tbody>
                    <tr>
                        <th>Positive</th>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Negative</th>
                        <td>-1</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div className="container">
            <div className="header">Header</div>
            <div className="section">
                <div className="section-1">
                    <h1 className="header">Section 1</h1>
                    <table className='main-table'>
                        <thead>
                            <tr>
                                <th>Header 1</th>
                                <th>Header 2</th>
                                <th>Header 3</th>
                                <th>Header 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                                <td>Data 4</td>
                            </tr>
                            <tr>
                                <td>Data 4</td>
                                <td>Data 5</td>
                                <td>Data 6</td>
                                <td>Data 7</td>
                            </tr>
                            <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>
                                    <div className="scrollable-cell">
                                        10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>
                                    <div className="scrollable-cell">
                                        10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>
                                    <div className="scrollable-cell">
                                        10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>
                                    <div className="scrollable-cell">
                                        10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>
                                    <div className="scrollable-cell">
                                        10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>
                                    <div className="scrollable-cell">
                                        10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Data 7</td>
                                <td>Data 8</td>
                                <td>Data 9</td>
                                <td>
                                    <div className="scrollable-cell">
                                        10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data 10Data
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section-2">
                    <h1 className="header">Section-2</h1>
                    <div className="block-1">
                        <p>Description : </p>
                        <textarea maxLength={1024} id=""></textarea>
                    </div>
                    <div className="block-2 block">
                        <div className="sub-block">Sub-Block</div>
                        <div className="sub-block">Sub-Block</div>
                    </div>
                    <div className="block block-3">
                        <div className="table-1">
                            <table>
                                <thead>
                                    <th>Header 1</th>
                                    <th>Header 2</th>
                                    <th>Header 3</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Data 1 1 1 </td>
                                        <td>Data 2</td>
                                        <td>Data 3</td>
                                    </tr>
                                    <tr>
                                        <td>Data 4</td>
                                        <td>Data 5</td>
                                        <td>Data 6</td>
                                    </tr>
                                    <tr>
                                        <td>Data 7</td>
                                        <td>Data 8</td>
                                        <td>Data 9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-1">
                            <table>
                                <thead>
                                    <th>Header 1</th>
                                    <th>Header 2</th>
                                    <th>Header 3</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Data 1</td>
                                        <td>Data 2</td>
                                        <td>Data 3</td>
                                    </tr>
                                    <tr>
                                        <td>Data 4</td>
                                        <td>Data 5</td>
                                        <td>Data 6</td>
                                    </tr>
                                    <tr>
                                        <td>Data 7</td>
                                        <td>Data 8</td>
                                        <td>Data 9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="section-3">
                    <h1 className="header">Section 3</h1>
                    <div className="table-section">
                        <Table />
                        <Table />
                        <Table />
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}
