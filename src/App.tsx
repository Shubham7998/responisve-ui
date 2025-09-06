import './App.css';

export default function App() {
  return (
    <div className="app">

      {/* Section 1 */}
      <section className="section section1">
        <h1>Dashboard Header</h1>
        <div className="table-wrapper">
          <table className="main-table">
            <thead>
              <tr>
                <th>Field 1</th>
                <th>Field 2</th>
                <th>Field 3</th>
                <th>Field 4</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i}>
                  <td>Data {i + 1}-1</td>
                  <td>Data {i + 1}-2</td>
                  <td>Data {i + 1}-3</td>
                  <td>  <div className="cell-content">
                    Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4
                    Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4
                    Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section2">
        {/* Block 1 - Small table */}
        <div className="block block1">
          <h2>Small Table</h2>
          <table>
            <thead>
              <tr>
                <th>A</th>
                <th>B</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>2</td></tr>
              <tr><td>3</td><td>4</td></tr>
            </tbody>
          </table>
        </div>

        {/* Block 2 - Two horizontal blocks */}
        <div className="block block2">
          <div className="sub-block">Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1Sub Block 1</div>
          <div className="sub-block">Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2Sub Block 2</div>
        </div>

        {/* Block 3 - Notes */}
        <div className="block block3">
          <h2>Notes</h2>
          <textarea placeholder="Write notes here..."></textarea>
        </div>

        {/* Block 4 - Description */}
        <div className="block block4">
          <h2>Description</h2>
          <p>
            This is the description block. It contains longer text that wraps
            responsively.
            This is the description block. It contains longer text that wraps responsively.
            This is the description block. It contains longer text that wraps responsively.
            This is the description block. It contains longer text that wraps responsively.
            This is the description block. It contains longer text that wraps responsively.
            This is the description block. It contains longer text that wraps responsively.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section section3">
        <div className="table-grid">
          {[1, 2, 3, 4].map((num) => (
            <div className="mini-table" key={num}>
              <h3>Table {num}</h3>
              <table>
                <thead>
                  <tr>
                    <th>X</th>
                    <th>Y</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>2</td></tr>
                  <tr><td>3</td><td>4</td></tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
