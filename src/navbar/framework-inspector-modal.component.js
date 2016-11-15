import React from 'react';

export default class FrameworkInspectorModal extends React.Component {
	componentDidMount() {
		$(this.el).modal({
			dismissible: true,
			complete: () => {
				this.props.hideModal();
			},
		});

		$(this.el).modal('open');
	}
	render() {
		/* We're using a materialize css modal that uses a jquery plugin, because
		 * I didn't want to take the time to build my own nice-looking, mobile-responsive
		 * modal.
		 */
		return (
			<div className="modal" ref={el => this.el = el}>
				<div className="modal-content">
					<h4>
						Framework inspector
					</h4>
					<p>
						The framework inspector blah blah blah
					</p>
				</div>
				<div className="modal-footer">
					<a className="modal-action modal-close waves-effect waves-green btn-flat">
						Turn on framework inspector
					</a>
				</div>
			</div>
		);
	}
	componentWillUnmount() {
		$(this.el).modal('close');
	}
}
