import React, { Component } from 'react'
import EditRow from './EditRow'
import ViewRow from './ViewRow'

export default class Row extends Component {

  constructor(props, ctx) {
    super(props, ctx)
    this.setEdit = this.setEdit.bind(this)
    this.state = { isEdit: false }
  }

  setEdit(isEdit) {
    this.setState({ isEdit })
  }

  render() {
    if (this.state.isEdit) {
      return <EditRow { ...{
        ...this.props,
        onView: () => this.setEdit(false),
      }} />
    } else {
      return <ViewRow { ...{
        ...this.props,
        onEdit: () => this.setEdit(true),
        onDelete: () => {
          this.props.deleteRow(this.props.id)
        },
      }} />
    }
  }
}