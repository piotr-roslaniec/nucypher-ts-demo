import type { BlockchainPolicyParameters } from 'nucypher-ts'
import React from 'react'
import styled from 'styled-components'

import { Button } from '../base/Button'
import { ContentBlock } from '../base/base'
import { Input, Label, TitleRow, CellTitle } from '../form/form'

export const FormRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 32px 0 24px 58px;
`

interface PolicyFormProps {
  enabled: boolean
  policyParams: BlockchainPolicyParameters
  setPolicyParams: (value: BlockchainPolicyParameters) => void
  grantToBob: () => void
}

export const PolicyForm = ({ enabled, policyParams, setPolicyParams, grantToBob }: PolicyFormProps) => {
  const setLabel = (label: string) => setPolicyParams({ ...policyParams, label })
  const setShares = (shares: number) => setPolicyParams({ ...policyParams, shares })
  const setThreshold = (threshold: number) => setPolicyParams({ ...policyParams, threshold })
  const setPaymentPeriods = (paymentPeriods: number) => setPolicyParams({ ...policyParams, paymentPeriods })
  const setValue = (value: number) => setPolicyParams({ ...policyParams, value })

  const content = enabled ? (
    <div style={{ display: 'grid' }}>
      <FormRow>
        <Label htmlFor={'label'}>Label</Label>
        <Input
          id={'encryptionInput'}
          type="string"
          value={policyParams.label}
          onChange={(e) => setLabel(e.currentTarget.value)}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor={'shares'}>Shares</Label>
        <Input
          id={'n'}
          type="number"
          value={policyParams.shares}
          onChange={(e) => setShares(parseInt(e.currentTarget.value))}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor={'threshold'}>Threshold</Label>
        <Input
          id={'m'}
          type="number"
          value={policyParams.threshold}
          onChange={(e) => setThreshold(parseInt(e.currentTarget.value))}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor={'paymentPeriods'}>Payment periods</Label>
        <Input
          id={'paymentPeriods'}
          type="number"
          value={policyParams.paymentPeriods}
          onChange={(e) => setPaymentPeriods(parseInt(e.currentTarget.value))}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor={'paymentPeriods'}>Value (wei)</Label>
        <Input
          id={'value'}
          type="number"
          value={policyParams.value}
          onChange={(e) => setValue(parseInt(e.currentTarget.value))}
        />
      </FormRow>
      <FormRow>
        <Button onClick={grantToBob}>Create policy</Button>
      </FormRow>
    </div>
  ) : (
    <>
      <div>
        <h2>Policy creation in progress</h2>
        <h3>Please wait ...</h3>
      </div>
    </>
  )

  return (
    <ContentBlock style={{ padding: 0 }}>
      <TitleRow>
        <CellTitle>Create a blockchain policy</CellTitle>
      </TitleRow>
      {content}
    </ContentBlock>
  )
}