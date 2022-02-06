import React, { Component } from 'react';

class Counter extends Component {

    renderTags() {
        //conditional rendering
        if (this.state.tags.length === 0) return <p>There are no tags...</p>;
        
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        return (    
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    increase
                </button>

                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    decrease
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"; //we encapsulate it to refactore
        classes += (this.props.counter.value === 0) ? "warning" : "primary"; //this render classes dynamically
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;//Object deStructuring
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;//use this to avoid modifying
