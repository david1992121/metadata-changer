import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { MetaDataChanger } from '../target/types/meta_data_changer';

describe('meta-data-changer', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.MetaDataChanger as Program<MetaDataChanger>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
