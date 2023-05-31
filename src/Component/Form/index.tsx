import React from "react";
import { Button, Col, Select, Space, Form } from "antd";
import {
  ArrowRightOutlined,
  UndoOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { getExchangeInfoDataDefaultValue } from "./__utils/types";
import { getBaseAssetsList, getQuoteAssetsList } from "./__utils/helpers";
import { useGetExchangeData, useGetPublicMarketData } from "../../store";
import { FormContainer } from "./style";
import { defaultFormData, FormType } from "./__utils/types";
import { getExchangeInfoApi } from "./__utils/apiService";
import { isIdenticalObject } from "../../__utils/helpers";
import { getPublicMarketApi } from "../CardContainer/__utils/apiService";
import { getPublicMarketDataDefaultValue } from "../CardContainer/__utils/types";
import useGetExchangeInfoData from './__utils/useCustomHook'

const callPublicMarket = async (baseAsset: string, quoteAsset: string) => {
  const res = await getPublicMarketApi(baseAsset, quoteAsset);
  return res;
};

interface Props {
  isDarkMode: boolean;
}

const Form_ = ({ isDarkMode }: Props) => {
  const [form] = Form.useForm();
  const { data, saveData } = useGetExchangeData();
  const { data:publicMarketData,saveData: publicMarketSaveData } = useGetPublicMarketData();
  const {isLoading :gettingPublicMarket} = publicMarketData
  const { symbols } = data.data;
  const [formData, setFormData] = React.useState<FormType>(defaultFormData);
  const { baseAsset, quoteAsset } = formData;
  useGetExchangeInfoData({ getExchangeInfoDataDefaultValue , data, saveData, getExchangeInfoApi });


  const handleOnFinish = async (values: FormType) => {
    const { baseAsset, quoteAsset } = values;
    publicMarketSaveData({
      ...getPublicMarketDataDefaultValue,
      isLoading: true,
    });
    const res = await callPublicMarket(baseAsset, quoteAsset);
    const { status, data } = res;
    if (status === 200) {
      publicMarketSaveData({
        ...getPublicMarketDataDefaultValue,
        data: data,
        isLoading: false,
        isSuccess: true,
      });
    } else {
      publicMarketSaveData({
        ...getPublicMarketDataDefaultValue,
        isLoading: false,
        isError: true,
      });
    }
  };
  
  const handleOnClickReset = () : void=> {
    setFormData(defaultFormData);
    form.resetFields(["baseAsset", "quoteAsset"]);
    publicMarketSaveData(getPublicMarketDataDefaultValue,);
  }

  return (
    <Form form={form} onFinish={handleOnFinish}>
      <FormContainer isDarkMode={isDarkMode}>
        <Col span={24}>
          <Form.Item name="baseAsset">
            <Select
              size="large"
              placeholder="Select Crypto"
              disabled={!symbols}
              value={baseAsset ? baseAsset : undefined}
              onChange={(_symbol) =>
                setFormData({ ...formData, baseAsset: _symbol })
              }
              showSearch
            >
              {getBaseAssetsList(symbols, quoteAsset)?.map(
                (symbol: string, idx: number) => (
                  <Select.Option
                    value={symbol}
                    key={idx}
                    className="select-option"
                  >
                    {symbol}
                  </Select.Option>
                )
              )}
            </Select>
          </Form.Item>
          <ArrowRightOutlined className="arrow-icon" />
          <Form.Item name="quoteAsset">
            <Select
              size="large"
              placeholder="Select Crypto"
              disabled={!symbols}
              value={quoteAsset ? quoteAsset : null}
              onChange={(_symbol) =>
                setFormData({ ...formData, quoteAsset: _symbol })
              }
              showSearch
            >
              {getQuoteAssetsList(symbols, baseAsset)?.map(
                (symbol: string, idx: number) => (
                  <Select.Option
                    value={symbol}
                    key={idx}
                    className="select-option"
                  >
                    {symbol}
                  </Select.Option>
                )
              )}
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Space>
            <Button
              size="large"
              icon={<UndoOutlined />}
              disabled={isIdenticalObject(getPublicMarketDataDefaultValue,publicMarketData) || gettingPublicMarket}
              onClick={handleOnClickReset}
            >
              Reset
            </Button>
            <Button
              size="large"
              icon={<EyeOutlined />}
              disabled={baseAsset === "" || quoteAsset === "" || gettingPublicMarket}
              htmlType="submit"
            >
              Query
            </Button>
          </Space>
        </Col>
      </FormContainer>
    </Form>
  );
};

export default Form_;
