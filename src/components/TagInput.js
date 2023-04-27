import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

function TagInput(props) {
    const KeyCodes = {
        comma: 188,
        enter: 13,
        tab: 9
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];

    const { tags, setTags, tagLabel, setTagLabel } = props

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        tag.className = tagLabel;
        setTags([...tags, tag]);
        // setTagLabel('')
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };

    const suggestions = [

        // { id: "1", text: "mango", className: 'mango13' },
        // { id: "2", text: "pineapple" },
        // { id: "3", text: "orange" },
        // { id: "4", text: "pear" }
    ];
    return (
        <>
            <div>
                <ReactTags
                    tags={tags}
                    suggestions={suggestions}
                    delimiters={delimiters}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    handleTagClick={handleTagClick}
                    inputFieldPosition="top"
                    autocomplete
                    placeholder='Add tag'
                    classNames={{
                        remove: tagLabel
                    }}
                />
            </div>
        </>
    );
}
export default TagInput