"use client"

import { DataTable } from 'primereact/datatable';
import { Column, ColumnEvent, ColumnEditorOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function Home() {

  type User = {
    name: string,
    profession: string,
    rank: number,
    hobbie: string,
    code: number
  }

  const dataArr: User[] = [
    {name: 'Raman', code: 34, profession:"Criketer", rank: 34, hobbie: "Singing"},
    {name: 'Ram', code: 74, profession:"Golfer", rank: 24, hobbie: "Dancing"},
    {name: 'Suresh', code: 24, profession:"Footballer", rank: 56, hobbie: "Travelling"},
    {name: 'Mukesh', code: 32, profession:"Criketer", rank: 78, hobbie: "Acting"},
    {name: 'Sandeep', code: 31, profession:"Tennis", rank: 23, hobbie: "Reading"},
  ]

  const isPositiveInteger = (val: any) => {
        let str = String(val);

        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, '') || '0';
        let n = Math.floor(Number(str));

        return n !== Infinity && String(n) === str && n >= 0;
    };

  const onCellEditComplete = (e: ColumnEvent) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'code':
            case 'rank':
                if (isPositiveInteger(newValue)) rowData[field] = newValue;
                else event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0) rowData[field] = newValue;
                else event.preventDefault();
                break;
        }
    };

  const cellEditor = (options: ColumnEditorOptions) => {
        if (options.field === 'price') return priceEditor(options);
        else return textEditor(options);
    };

    const textEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback && options.editorCallback(e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const priceEditor = (options: ColumnEditorOptions) => {
        return <InputNumber value={options.value} onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback && options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" onKeyDown={(e) => e.stopPropagation()} />;
    };

  return (
  
    <div className="card">
            <DataTable value={dataArr} editMode="cell" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="profession" header="Profession"></Column>
                <Column field="rank" header="Rank"></Column>
                <Column field="hobbie" header="Hobbie"></Column>
            </DataTable>
        </div>
    
  );
}
