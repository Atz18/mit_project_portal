import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Form, Select, Input, Button } from "antd";
import { PRP_DECISION } from "../../utils/APP_CONSTANTS";

const { TextArea } = Input;

const PageTitle = styled.h1`
  font-size: 36px;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const SectionContent = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-bottom: 5px;
`;

const ProposalDecision = () => {
  const location = useLocation();
  const project = location.state;
  return (
    <Form>
      <PageTitle>Project Proposal Decision Page</PageTitle>
      <SectionTitle>{project.title}</SectionTitle>
      <Form.Item label="Decision" name="prp_decision" style={{ width: 300 }}>
        <Select options={PRP_DECISION} />
      </Form.Item>
      <SectionContent>Feedback Comments:</SectionContent>
      <Form.Item name="feedback_comments">
        <TextArea rows={11} showCount minLength={20} maxLength={500} />
      </Form.Item>
      <Form.Item name="feedback_comments" style={{ marginLeft: 1202 }}>
        <Button type="primary" danger>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProposalDecision;
