
export const Twitter = () => (
  <a className='mr-3 ' href='https://twitter.com/InVarFinance' target="_blank" rel="noopener noreferrer">
    <img className="btnShadow rounded w-10" src="/twitter_1.svg" alt="Logo" />
  </a>
);

export const Discord = () => (
  <a className='mr-3' href='https://discord.gg/BrzPWYut4p' target="_blank" rel="noopener noreferrer">
    <img className="btnShadow rounded w-10" src="/discord_1.svg" alt="Logo" />
  </a>
);

export const OpenLink = ({ link, children }) => (
  <a className=' text-invar-purple hover:underline' href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const ButtonMailto = () => (
  <a className=' text-invar-purple hover:underline' href='mailto:info@invar.finance' target="_blank" rel="noopener noreferrer">
    {`info@invar.finance`}
  </a>
);