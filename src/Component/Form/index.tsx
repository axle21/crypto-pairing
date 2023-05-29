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

const callPublicMarket = async (baseAsset: string, quoteAsset: string) => {
  const res = await getPublicMarketApi(baseAsset, quoteAsset);
  return res;
};

type Props = {
  isDarkMode: boolean;
};

const Form_ = ({ isDarkMode }: Props) => {
  const [form] = Form.useForm();
  const { data, saveData } = useGetExchangeData();
  const { saveData: publicMarketSaveData } = useGetPublicMarketData();
  const { symbols } = data.data;
  const [formData, setFormData] = React.useState<FormType>(defaultFormData);
  const { baseAsset, quoteAsset } = formData;

  React.useEffect(() => {
    (async () => {
      if (isIdenticalObject(getExchangeInfoDataDefaultValue, data)) {
        saveData({ ...getExchangeInfoDataDefaultValue, isLoading: true });
        const res = await getExchangeInfoApi();
        const { status, data } = res;
        if (status === 200) {
          saveData({
            ...getExchangeInfoDataDefaultValue,
            data,
            isLoading: false,
            isSuccess: true,
          });
        } else {
          saveData({
            ...getExchangeInfoDataDefaultValue,
            isLoading: false,
            isError: true,
          });
        }
      }
    })();
  }, [data, saveData, formData]);

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
              disabled={baseAsset === "" || quoteAsset === ""}
              onClick={handleOnClickReset}
            >
              Reset
            </Button>
            <Button
              size="large"
              icon={<EyeOutlined />}
              disabled={baseAsset === "" || quoteAsset === ""}
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
