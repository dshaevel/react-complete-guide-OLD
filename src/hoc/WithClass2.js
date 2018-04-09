import React, { Component } from 'react';

// const withClass2 = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

const withClass2 = (WrappedComponent, className) => {
    const WithClass2 = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass2 {...props} forwardedRef={ref} />
    });
}

export default withClass2;