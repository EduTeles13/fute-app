import React from 'react';

import { ResponsiveBox } from '@/components';
import { Profile } from '@/modules/private/Profile';

const ProfileScreen = () => {
  return (
    <ResponsiveBox>
      <Profile />
    </ResponsiveBox>
  );
};

export default ProfileScreen;
