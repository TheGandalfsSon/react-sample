import * as React from 'react';
interface Props {
    editingUserName: string;
    disabled: boolean;
    onEditingNameUpdated: (newEditingName: string) => void;
    onNameUpdatedRequest: () => void;
}
const onInputChange = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditingNameUpdated(e.target.value);
}

export const NameEdit = (props: Props) =>
    <>
        <input value={props.editingUserName}
            onChange={onInputChange(props)}>
        </input>
        <button onClick={(e) => props.onNameUpdatedRequest()} disabled={props.disabled}>
            Submit
        </button>
    </>   