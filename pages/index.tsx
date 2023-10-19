import type { NextPage } from 'next';
import Head from 'next/head';
import router from 'next/router';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div >


      <Layout>

        <div>
          <div className='hero bg-base-200 rounded-xl'>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <div className='bg-primary rounded-xl p-2'><h1 className="text-5xl font-bold">Wellcome to barDAO!</h1></div>

                <p className="py-6">More transparent, inclusive, and efficient future for governance. By A Platform as a Service Community Builder powered by Blockchain.</p>
            
                <button className="btn btn-primary rounded-xl hover:scale12"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/app');
                  }}>Get Started!</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
