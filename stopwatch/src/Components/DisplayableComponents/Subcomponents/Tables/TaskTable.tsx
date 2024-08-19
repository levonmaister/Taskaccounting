
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/store';

import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

import { Task } from '../../../../reducers/reducerTypes';


const TaskTable = () => {
    
    const tasks = useSelector((state: RootState ) => state.tasks);

    const data = tasks;

    const columns = useMemo<MRT_ColumnDef<Task>[]>(
        ()=>[
        {
                accessorKey: 'date',
                header: 'Date',
                size: 50,
        }
        , 
        {
            accessorKey: 'name',
            header: 'Name',
            size: 50,
        },
        {
            accessorKey: 'time',
            header: 'Time',
            size: 50,
        },
        {
            accessorKey: 'Goal',
            header: 'Goal ID',
            size: 50,
        }
        ],[],
    );


const table = useMaterialReactTable({
    columns,
    data,
});

return <MaterialReactTable table={table} />;


}


export default TaskTable;