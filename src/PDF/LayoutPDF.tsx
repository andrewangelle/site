import type { ViewProps } from '@react-pdf/renderer';
import { View } from '@react-pdf/renderer';
import type { ReactNode } from 'react';
import { cloneElement } from 'react';
import { layout } from '~/PDF/theme';

type LayoutProps = { children: ReactNode } & ViewProps;

export function Row({ children, ...props }: LayoutProps) {
  const MainSection = cloneElement(children?.[0]);
  const SideSection = cloneElement(children?.[1]);
  return (
    <View
      {...props}
      style={{
        ...layout.row,
        ...(props.style ?? {}),
      }}
    >
      <ColumnMain>{MainSection}</ColumnMain>
      <ColumnSide>{SideSection}</ColumnSide>
    </View>
  );
}

function ColumnMain({ children, ...props }: LayoutProps) {
  return (
    <View
      {...props}
      style={{
        ...layout.column.main,
        ...(props.style ?? {}),
      }}
    >
      {children}
    </View>
  );
}

function ColumnSide({ children, ...props }: LayoutProps) {
  return (
    <View
      {...props}
      style={{
        ...layout.column.sidebar,
        ...(props.style ?? {}),
      }}
    >
      {children}
    </View>
  );
}
