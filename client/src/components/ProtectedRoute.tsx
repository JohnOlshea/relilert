import { MonitorContext } from '@/context/MonitorContext';
import { CHECK_CURRENT_USER } from '@/queries/auth';
import { useQuery } from '@apollo/client';
import React, { FC, ReactElement, ReactNode, useContext, useEffect } from 'react';
import PageLoader from './PageLoader';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { apolloPersistor } from '@/queries/apolloClient';

interface IProtectRouteProps {
  children: ReactNode;
}

type NavigateProps = { to: string, type: string };

function Navigate({ to, type }: NavigateProps): null {
  const router: AppRouterInstance = useRouter();
  const { dispatch } = useContext(MonitorContext);

  useEffect(() => {
    if (type === 'logout') {
      dispatch({
        type: 'dataUpdate',
        payload: {
          user: null,
          notifications: []
        }
      });
      apolloPersistor?.purge();
    }
    router.push(to);
  }, [type, to, router, dispatch]);

  return null;
}

const ProtectedRoute: FC<IProtectRouteProps> = ({ children }): ReactElement => {
  const { dispatch } = useContext(MonitorContext);
  const { loading, error, data } = useQuery(CHECK_CURRENT_USER, {
    fetchPolicy: 'network-only'
  });

  useEffect(() => {
    if (data) {
      const { user, notifications } = data.checkCurrentUser;
      dispatch({
        type: 'dataUpdate',
        payload: {
          user,
          notifications
        }
      });
    }
  }, [data, dispatch]);

  if (loading) {
    return <PageLoader />
  } else {
    if (!error && data && data.checkCurrentUser.user) {
      return <>{children}</>
    } else {
      return <><Navigate to="/" type="logout" /></>
    }
  }

}

export default ProtectedRoute
