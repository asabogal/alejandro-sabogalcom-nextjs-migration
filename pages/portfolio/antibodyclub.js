import {useRouter} from 'next/router';
import FreelanceContainer  from '../../components/portfolio/freelance/FreelanceContainer';

const AntibodyClub = () => {

  const router = useRouter();
  const path = router.pathname.split('/')[2];

  return (
    <FreelanceContainer path={path}/>
  )
}

export default AntibodyClub;