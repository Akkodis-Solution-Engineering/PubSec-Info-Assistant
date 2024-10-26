// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "Summarise the Year 7 English Teaching & Learning Outline", value: "Summarise the Year 7 English Teaching & Learning Outline" },
    { text: "What are the policy standards for curriculum planning?", value: "What are the policy standards for curriculum planning?" },
    { text: "What is the notional teaching time to be spent on each learning area?", value: "What is the notional teaching time to be spent on each learning area?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
