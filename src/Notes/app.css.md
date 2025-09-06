## If we need vertical scroll for td 

### html : 

<td>  
<div className="cell-content">
    Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4
    Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4
    Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 Data {i + 1}-4 
  </div></td>

### css : 

.cell-content {
  max-height: 4.5em;        /* 3 lines (if line-height = 1.5) */
  line-height: 1.5em;       /* define line height */
  overflow-y: auto;         /* scroll if content exceeds */
  white-space: normal;      /* wrap text to next line */
  scrollbar-width: thin;
}  