import React, { useEffect, useState } from 'react';
import {
  Announced,
  classNamesFunction,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  IProcessedStyleSet,
  SelectionMode
} from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IGroupListProps, IGroupListStyleProps, IGroupListStyles, ItemColumn } from './GroupList.types';
import { copyAndSort } from '../../utilities/listUtilities';
import { Group } from '../../models/Group';

const getClassNames = classNamesFunction<IGroupListStyleProps, IGroupListStyles>();

export const GroupListBase: React.FunctionComponent<IGroupListProps> = (props: IGroupListProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IGroupListStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  const handleColumnClick = (ev: React.MouseEvent<HTMLElement, MouseEvent>, column: IColumn): void => {
    const newColumns: ItemColumn<Group>[] = columns.slice();
    const currColumn: ItemColumn<Group> = newColumns.filter((currCol) => column.key === currCol.key)[0];

    newColumns.forEach((newCol: ItemColumn<Group>) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
        setAnnouncedMessage(
          `${currColumn.name} is sorted ${currColumn.isSortedDescending ? 'descending' : 'ascending'}`
        );
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    const newItems = copyAndSort(items, currColumn.fieldName, currColumn.isSortedDescending);
    setColumns(newColumns);
    setItems(newItems);
  };

  const withClickHandler = (cols: ItemColumn<Group>[]): ItemColumn<Group>[] => {
    const newColumns: ItemColumn<Group>[] = cols.slice();
    newColumns.forEach((c) => (c.onColumnClick = handleColumnClick));
    return newColumns;
  }

  const [announcedMessage, setAnnouncedMessage] = useState<string>();
  const [columns, setColumns] = useState<ItemColumn<Group>[]>(withClickHandler(props.columns));
  const [items, setItems] = useState<Group[]>(props.items);

  useEffect(() => setColumns(withClickHandler(props.columns)), [props.columns]);
  useEffect(() => setItems(props.items), [props.items])

  return (
    <div className={classNames.root}>
      {announcedMessage ? <Announced message={announcedMessage} /> : undefined}
      <DetailsList
        items={items}
        columns={columns}
        selectionMode={SelectionMode.none}
        getKey={(item) => item.key}
        setKey="none"
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
      />
    </div>
  );
};
