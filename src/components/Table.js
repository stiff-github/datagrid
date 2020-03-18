import React from 'react';
import ReactDOM from 'react-dom';
import RowHead from './RowHead';
import RowTable from './Row';
import { connect } from 'react-redux';
import * as filterActions from '../actions/FilterActions';
import * as tableActions from '../actions/TableActions';
import * as sortActions from '../actions/SortActions';
import * as visibleActions from '../actions/VisibleActions';
import { FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import {FormControl, Col, Row} from 'react-bootstrap';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

let visible1h;
let visible2h;
let visible3h;
let visible4h;
let visible5h;
let visible6h;
let visible7h;
let vTable = ({ rows, filter1, filter2, filter3, filter4, filter5, filter6, filter7, setFilter1, setFilter2, setFilter3, setFilter4, 
  setFilter5, setFilter6, setFilter7, deleteRow, editRow, clickNameUp, clickNameDown, clickDateUp, clickDateDown, setVisible1, setVisible2, 
  setVisible3, setVisible4, setVisible5, setVisible6, setVisible7, visible1, visible2, visible3, visible4, visible5, visible6, visible7 }) => (
  <div>
    <div>
      <Row style={styles.row}>
        <Col style={styles.cell} >
          <label >
            <input id="chkVis1"
              type="checkbox"
              checked={visible1}
              onChange={e => {
                setVisible1(e.target.checked)
              }}
            />
            Visible <b>Name</b>
          </label>
        </Col>
        <Col style={styles.cell} >
          <label >
            <input id="chkVis2"
              type="checkbox"
              checked={visible2}
              onChange={e => {
                setVisible2(e.target.checked)
              }}
            />
            Visible <b>Need</b>
          </label>
        </Col>
        <Col style={styles.cell} >
          <label >
            <input id="chkVis3"
              type="checkbox"
              checked={visible3}
              onChange={e => {
                setVisible3(e.target.checked)
              }}
            />
            Visible <b>For Who</b>
          </label>
        </Col>
        <Col style={styles.cell} >
          <label >
            <input id="chkVis4"
              type="checkbox"
              checked={visible4}
              onChange={e => {
                setVisible4(e.target.checked)
              }}
            />
            Visible <b>Localdate</b>
          </label>
        </Col>
        <Col style={styles.cell} >
          <label >
            <input id="chkVis5"
              type="checkbox"
              checked={visible5}
              onChange={e => {
                setVisible5(e.target.checked)
              }}
            />
            Visible <b>Localtime</b>
          </label>
        </Col>
        <Col style={styles.cell} >
          <label >
            <input id="chkVis6"
              type="checkbox"
              checked={visible6}
              onChange={e => {
                setVisible6(e.target.checked)
              }}
            />
            Visible <b>Donation</b>
          </label>
        </Col>
        <Col style={styles.cell} >
          <label >
            <input id="chkVis7"
              type="checkbox"
              checked={visible7}
              onChange={e => {
                setVisible7(e.target.checked)
              }}
            />
            Visible <b>isFirst</b>
          </label>
        </Col>
        <Col style={styles.cell}>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.cell} id="vis1" >
          <InputGroup>
            <FormControl
              placeholder="Search Name here..."
              value={filter1}
              onChange={({ target }) => setFilter1(target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
              <span id="up1"><GoTriangleUp onClick={() => {clickNameUp(1); clickNameDown(0);clickDateUp(0); clickDateDown(0);}} /></span><span id="down1"><GoTriangleDown onClick={() => {clickNameDown(-1); clickNameUp(0);clickDateUp(0); clickDateDown(0);}} /></span>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col style={styles.cell} id="vis2" >
          <InputGroup>
            <FormControl
              placeholder="Search Need here..."
              value={filter2}
              onChange={e => setFilter2(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col style={styles.cell} id="vis3" >
          <InputGroup>
            <FormControl
              placeholder="Search For Who here..."
              value={filter3}
              onChange={e => setFilter3(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col style={styles.cell} id="vis4" >
          <InputGroup>
            <FormControl
              placeholder="Search Localdate here..."
              value={filter4}
              onChange={e => setFilter4(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
              <span id="up4"><GoTriangleUp onClick={() => {clickDateUp(1); clickDateDown(0);clickNameUp(0); clickNameDown(0);}} /></span><span id="down4"><GoTriangleDown onClick={() => {clickDateDown(-1); clickDateUp(0);clickNameUp(0); clickNameDown(0);}} /></span>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col style={styles.cell} id="vis5" >
          <InputGroup>
            <FormControl
              placeholder="Search Localtime here..."
              value={filter5}
              onChange={e => setFilter5(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col style={styles.cell} id="vis6" >
          <InputGroup>
            <FormControl
              placeholder="Search Donation here..."
              value={filter6}
              onChange={e => setFilter6(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col style={styles.cell} id="vis7" >
          <label>
            <input
              type="checkbox"
              checked={filter7}
              onChange={e => {
                setFilter7(e.target.checked)
              }}
            />
            Show only First
          </label>
        </Col>
        <Col style={styles.cell}>
        </Col>
      </Row>
    </div>
    <RowHead visible1h={visible1h} visible2h={visible2h} visible3h={visible3h} visible4h={visible4h} visible5h={visible5h} visible6h={visible6h} visible7h={visible7h} />
    {
      rows ?
        rows.map((row) => (
          <RowTable {
            ...{
              ...row,
              deleteRow,
              editRow,
              key: row.id,
            }
          } visible1r={visible1h} visible2r={visible2h} visible3r={visible3h} visible4r={visible4h} visible5r={visible5h} visible6r={visible6h} visible7r={visible7h} />)
        ) :
        'loading'
    }
  </div>
)

const mapStateToProps = ({ rows, sortUp1, sortDown1, sortUp4, sortDown4, filter1, filter2, filter3, filter4, filter5, filter6, filter7, visible1, visible2, visible3, visible4, visible5, visible6, visible7 }) => {
  if (visible1) {
    visible1h=true;
    if (document.getElementById("vis1")) {
      document.getElementById("vis1").className = 'visible';
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("chkVis1").checked = true;
        document.getElementById("vis1").className = 'visible';
      });
    }
  } else {
    visible1h=false;
    document.getElementById("vis1").className = 'hidden';
  }

  if (visible2) {
    visible2h=true;
    if (document.getElementById("vis2")) {
      document.getElementById("vis2").className = 'visible';
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("chkVis2").checked = true;
        document.getElementById("vis2").className = 'visible';
      });
    }
  } else {
    visible2h=false;
    document.getElementById("vis2").className = 'hidden';
  }

  if (visible3) {
    visible3h=true;
    if (document.getElementById("vis3")) {
      document.getElementById("vis3").className = 'visible';
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("chkVis3").checked = true;
        document.getElementById("vis3").className = 'visible';
      });
    }
  } else {
    visible3h=false;
    document.getElementById("vis3").className = 'hidden';
  }

  if (visible4) {
    visible4h=true;
    if (document.getElementById("vis4")) {
      document.getElementById("vis4").className = 'visible';
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("chkVis4").checked = true;
        document.getElementById("vis4").className = 'visible';
      });
    }
  } else {
    visible4h=false;
    document.getElementById("vis4").className = 'hidden';
  }
  
  if (visible5) {
    visible5h=true;
    if (document.getElementById("vis5")) {
      document.getElementById("vis5").className = 'visible';
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("chkVis5").checked = true;
        document.getElementById("vis5").className = 'visible';
      });
    }
  } else {
    visible5h=false;
    document.getElementById("vis5").className = 'hidden';
  }

  if (visible6) {
    visible6h=true;
    if (document.getElementById("vis6")) {
      document.getElementById("vis6").className = 'visible';
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("chkVis6").checked = true;
        document.getElementById("vis6").className = 'visible';
      });
    }
  } else {
    visible6h=false;
    document.getElementById("vis6").className = 'hidden';
  }

  if (visible7) {
    visible7h=true;
    if (document.getElementById("vis7")) {
      document.getElementById("vis7").className = 'visible';
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("chkVis7").checked = true;
        document.getElementById("vis7").className = 'visible';
      });
    }
  } else {
    visible7h=false;
    document.getElementById("vis7").className = 'hidden';
  }

  let elemUp = document.getElementById('up1');
  let elemDown = document.getElementById('down1');
  let dateUp = document.getElementById('up4');
  let dateDown = document.getElementById('down4');
  let sort=0
  if (sortUp1===1) {
    sort=1;
    ReactDOM.findDOMNode(elemUp).style.color = 'red';
    ReactDOM.findDOMNode(elemDown).style.color = 'black';
    ReactDOM.findDOMNode(dateUp).style.color = 'black';
    ReactDOM.findDOMNode(dateDown).style.color = 'black';
  } else if (sortDown1===-1) {
    sort=-1
    ReactDOM.findDOMNode(elemUp).style.color = 'black';
    ReactDOM.findDOMNode(elemDown).style.color = 'red';
    ReactDOM.findDOMNode(dateUp).style.color = 'black';
    ReactDOM.findDOMNode(dateDown).style.color = 'black';
  } else if (sortUp4===1){
    sort=4;
    ReactDOM.findDOMNode(dateUp).style.color = 'red';
    ReactDOM.findDOMNode(dateDown).style.color = 'black';
    ReactDOM.findDOMNode(elemUp).style.color = 'black';
    ReactDOM.findDOMNode(elemDown).style.color = 'black';
  } else if (sortDown4===-1) {
    sort=-4
    ReactDOM.findDOMNode(dateUp).style.color = 'black';
    ReactDOM.findDOMNode(dateDown).style.color = 'red';
    ReactDOM.findDOMNode(elemUp).style.color = 'black';
    ReactDOM.findDOMNode(elemDown).style.color = 'black';
  }else {
    sort=0;
  }
  function sortBy(a, b) {
    if (sort===1) {
      return (a.name > b.name ?
        1 :
        a.name < b.name ? -1 : 0) * 1;
    } else if (sort===-1) {
      return (a.name < b.name ?
        1 :
        a.name > b.name ? -1 : 0) * 1;
    }else if (sort===4) {
      return (a.localdate > b.localdate ?
        1 :
        a.localdate < b.localdate ? -1 : 0) * 1;
    } else if (sort===-4) {
      return (a.localdate < b.localdate ?
        1 :
        a.localdate > b.localdate ? -1 : 0) * 1;
    }else {
      return null;
    }
  }

  return {
    filter1, 
    rows: !rows ?
      []:
      Object.values(rows)
        .sort(sortBy)
        .filter(row => row.name.toLowerCase().search(filter1) !== -1 && row.need.toLowerCase().search(filter2) !== -1 && row.localdate.toLowerCase().search(filter4) !== -1 && row.localtime.toLowerCase().search(filter5) !== -1 && row.donation.amount.toLowerCase().search(filter6) !== -1 && (filter7 ? row.isFirst : true), 
          ),
  }
}

let styles = {
  row: {
    display: 'flex',
    flexBasis: 0,
    borderBottom: '1px solid #ccc',
    height: 'auto',
    alignItems: 'center',
  },
  cell: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  sortUp: {
    color: '#C8C8C8',
  },
  sortDown: {
    color: '#C8C8C8',
  },
}

export default connect(
  mapStateToProps,
  {
    ...filterActions,
    ...tableActions,
    ...sortActions,
    ...visibleActions,
  },
) (vTable)
