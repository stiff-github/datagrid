import React from 'react';

const ViewRow = ({
  id,
  name,
  need,
  forwho,
  localdate,
  localtime,
  donation,
  isFirst,
  onEdit,
  onDelete,
  visible1r,
  visible2r,
  visible3r,
  visible4r,
  visible5r,
  visible6r,
  visible7r,
}) => {
  const onChange = ({ target: { value } }) => {
    if (value === 'edit') onEdit(id)
    if (value === 'delete') onDelete(id)
  }
  let enume='';
  let en;
  for (en in forwho) {
    enume+=forwho[en]+' '
  };

  let classnameVal1='visible';
  let classnameVal2='visible';
  let classnameVal3='visible';
  let classnameVal4='visible';
  let classnameVal5='visible';
  let classnameVal6='visible';
  let classnameVal7='visible';
  if (visible1r) {
    classnameVal1 = 'visible';
  } else {
    classnameVal1 = "hidden";
  }

  if (visible2r) {
    classnameVal2 = 'visible';
  } else {
    classnameVal2 = "hidden";
  }

  if (visible3r) {
    classnameVal3 = 'visible';
  } else {
    classnameVal3 = "hidden";
  }

  if (visible4r) {
    classnameVal4 = 'visible';
  } else {
    classnameVal4 = "hidden";
  }

  if (visible5r) {
    classnameVal5 = 'visible';
  } else {
    classnameVal5 = "hidden";
  }

  if (visible6r) {
    classnameVal6 = 'visible';
  } else {
    classnameVal6 = "hidden";
  }

  if (visible7r) {
    classnameVal7 = 'visible';
  } else {
    classnameVal7 = "hidden";
  }

  return (
    <div style={styles.row}>
      <div className={classnameVal1} style={styles.cell}>{name}</div>
      <div className={classnameVal2} style={styles.cell}>{need}</div>
      <div className={classnameVal3} style={styles.cell}>{enume}</div>
      <div className={classnameVal4} style={styles.cell}>{localdate}</div>
      <div className={classnameVal5} style={styles.cell}>{localtime}</div>
      <div className={classnameVal6} style={styles.cell}>{donation.currency} {donation.amount}</div>
      <div className={classnameVal7} style={styles.cell}>{isFirst ? 'FirstTime' : ''}</div>
      <div style={styles.cell}>
        <select onChange={onChange}>
          <option>Action</option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </div>
  )
};

const styles = {
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
};

export default ViewRow;
