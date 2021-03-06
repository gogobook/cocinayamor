class DetailMultiSelect extends React.Component {
    render() {
        let id = this.props.className + '-select';
        return (
            <select id={id} multiple className="form-control cya-select-multiple">
                {this.props.data.map((item, key) => {
                    return <option key={'option-' + item.key}> {item.text}</option>;
                })}
            </select>
        );
    }
}
