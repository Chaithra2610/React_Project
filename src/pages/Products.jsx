import React, { useRef } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, Page, Selection, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { productsData, productsGrid } from '../data/dummy'; // Assuming similar data structure
import { Header } from '../components';

const Products = () => {
  const grid = useRef(null);
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  const actionComplete = (args) => {
    if (args.requestType === 'save') {
      // Implement logic upon save action here
    }
  };

  const addProduct = () => {
    // Logic to add a new product
    const newRecord = { Id: 'newId', Name: 'New Product', Category: 'New Category', Price: 0, InStock: 'Yes' };
    grid.current.addRecord(newRecord, grid.current.getCurrentViewRecords().length);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
      <GridComponent
        dataSource={productsData} // Make sure this data is available
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        editSettings={editSettings}
        toolbar={toolbarOptions}
        actionComplete={actionComplete}
        allowSorting
        ref={grid}
      >
        <ColumnsDirective>
          {/* Map your columns here, similar to the Customers component */}
          {productsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
      <ButtonComponent onClick={addProduct}>Add New Product</ButtonComponent>
    </div>
  );
};

export default Products;
