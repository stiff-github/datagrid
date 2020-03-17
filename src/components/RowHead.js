import React from 'react';

function RowHead(props) {
  if (document.getElementById("vis1h")) {
    if (props.visible1h) {
      document.getElementById("vis1h").className = 'visible';
    } else {
      document.getElementById("vis1h").className = 'hidden';
    }
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("vis1h").className = 'visible';
    });
  };

  if (document.getElementById("vis2h")) {
    if (props.visible2h) {
      document.getElementById("vis2h").className = 'visible';
    } else {
      document.getElementById("vis2h").className = 'hidden';
    }
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("vis2h").className = 'visible';
    });
  };

  if (document.getElementById("vis3h")) {
    if (props.visible3h) {
      document.getElementById("vis3h").className = 'visible';
    } else {
      document.getElementById("vis3h").className = 'hidden';
    }
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("vis3h").className = 'visible';
    });
  };

  if (document.getElementById("vis4h")) {
    if (props.visible4h) {
      document.getElementById("vis4h").className = 'visible';
    } else {
      document.getElementById("vis4h").className = 'hidden';
    }
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("vis4h").className = 'visible';
    });
  };

  if (document.getElementById("vis5h")) {
    if (props.visible5h) {
      document.getElementById("vis5h").className = 'visible';
    } else {
      document.getElementById("vis5h").className = 'hidden';
    }
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("vis5h").className = 'visible';
    });
  };

  if (document.getElementById("vis6h")) {
    if (props.visible6h) {
      document.getElementById("vis6h").className = 'visible';
    } else {
      document.getElementById("vis6h").className = 'hidden';
    }
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("vis6h").className = 'visible';
    });
  };

  if (document.getElementById("vis7h")) {
    if (props.visible7h) {
      document.getElementById("vis7h").className = 'visible';
    } else {
      document.getElementById("vis7h").className = 'hidden';
    }
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("vis7h").className = 'visible';
    });
  };
  
  return (
    <div style={styles.row}>
    <div id= "vis1h" style={styles.cell}>Name</div>
    <div id= "vis2h" style={styles.cell}>Need</div>
    <div id= "vis3h" style={styles.cell}>For Who</div>
    <div id= "vis4h" style={styles.cell}>Localdate</div>
    <div id= "vis5h" style={styles.cell}>Localtime</div>
    <div id= "vis6h" style={styles.cell}>Donation</div>
    <div id= "vis7h" style={styles.cell}>isFirst</div>
    <div style={styles.cell}></div>
  </div>
  );
}

const styles = {
  row: {
    display: 'flex',
    flexBasis: 0,
    borderBottom: '1px solid #ccc',
    height: 40,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  cell: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRight: '1px solid #ccc',
    flex: 1,
  },
}

export default RowHead;
