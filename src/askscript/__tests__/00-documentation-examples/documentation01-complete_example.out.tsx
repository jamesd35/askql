import * as askjsx from '../../../askjsx';
askjsx;

export const expectedOutput = (
  <ask args={[['arg1', 'int']]} returns={'string'}>
    <fun name={'factorial'} args={[['n', 'int']]} returns={'int'}>
      <if condition={<call name={'lessThan'} args={[<ref name={'n'} />, 2]} />}>
        <return value={<ref name={'n'} />} />
      </if>
      <call
        name={'multiply'}
        args={[
          <ref name={'n'} />,
          <call
            name={'factorial'}
            args={[<call name={'minus'} args={[<ref name={'n'} />, 1]} />]}
          />,
        ]}
      />
    </fun>
    <fun
      name={'sum'}
      args={[
        ['a', 'int'],
        ['b', 'int'],
      ]}
      returns={'int'}
    >
      <call name={'plus'} args={[<ref name={'a'} />, <ref name={'b'} />]} />
    </fun>
    <const name={'one'} type={'any'} value={1} />
    <call
      name={'toString'}
      args={[
        <call
          name={'sum'}
          args={[
            <ref name={'one'} />,
            <call name={'factorial'} args={[<ref name={'arg1'} />]} />,
          ]}
        />,
      ]}
    />
  </ask>
);