import { View, type ViewProps } from '@react-pdf/renderer';
import type { ReactNode } from 'react';
import { layout } from '~/PDF/theme';

export function Row({
  children,
  ...props
}: { children: ReactNode } & ViewProps) {
  return (
    <View
      {...props}
      style={{
        ...layout.row,
        ...(props.style ?? {}),
      }}
    >
      {children}
    </View>
  );
}

export function ColumnMain({
  children,
  ...props
}: { children: ReactNode } & ViewProps) {
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

export function ColumnSide({
  children,
  ...props
}: { children: ReactNode } & ViewProps) {
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
