import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import {
  Button,
  Card,
  CopyToClipboardBtn,
  Text,
  Title
} from "@gnosis.pm/safe-react-components";
import { useGuildContext } from "../../context/GuildContext";
import { useWeb3Context } from "../../context/Web3Context";
import { APP_DOMAIN } from "../../constants";
import { fetchGuild } from "../../graphql";

const ProfileImage = styled.img`
  height: 6rem;
  object-fit: contain;
`;

const StatItemContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const TitleCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-right: 0.4rem;
`;

const StatsText = styled(Text)`
  margin-right: 0.5rem;
`;

const GuildStats: React.FC = () => {
  const [numTokens, setNumTokens] = useState("0");
  const [numContributors, setNumContributors] = useState(0);
  const { guildMetadata } = useGuildContext();
  const { account, ethersProvider, providerChainId } = useWeb3Context();

  useEffect(() => {
    const getTokens = async () => {
      const guild = await fetchGuild(
        guildMetadata.guildAddress,
        providerChainId
      );
      if (guild) {
        setNumTokens(ethers.utils.formatEther(guild.currentBalance));
        setNumContributors(guild.totalSubscriptions);
      }
    };
    getTokens();
  }, [providerChainId, fetchGuild, guildMetadata.guildAddress]);

  return (
    <div style={{ width: "100%" }}>
      <ProfileImage
        src={URL.createObjectURL(guildMetadata.image)}
        alt="Guild profile"
      />
      <Title size="md" strong={true}>
        Guild Stats
      </Title>
      <StatItemContainer>
        <StatsText size="xl" strong={true}>
          Other Internet Guild Page
        </StatsText>
        <CopyToClipboardBtn
          textToCopy={`${APP_DOMAIN}/guild/${guildMetadata.guildAddress}`}
        />
      </StatItemContainer>
      <Text size="lg">{`${APP_DOMAIN}/...`}</Text>
      <StatItemContainer>
        <StatsText size="xl" strong={true}>
          Embed Code
        </StatsText>
        <CopyToClipboardBtn
          textToCopy={`<iframe src="${APP_DOMAIN}/guild/${guildMetadata.guildAddress}/contribute/link" />`}
        />
      </StatItemContainer>
      <Text size="lg">{`<iframe src="${APP_DOMAIN}/guild...`}</Text>
      <StatItemContainer>
        <Card style={{ width: "100%", maxWidth: "16rem" }}>
          <TitleCardContainer>
            <Text size="lg" color="primary" strong={true}>
              {numContributors}
            </Text>
            <Text size="lg" strong={true}>
              Contributors
            </Text>
          </TitleCardContainer>
          <CardContainer>
            <Text size="lg" color="primary" strong={true}>
              {numTokens}
            </Text>
            <Text size="lg" strong={true}>
              ETH
            </Text>
          </CardContainer>
        </Card>
      </StatItemContainer>
      <ButtonContainer>
        <Button size="lg" color="primary" variant="contained">
          Download Contributors List
        </Button>
      </ButtonContainer>
      <Text size="sm">Last updated 11 November at 10:46 UTC</Text>
    </div>
  );
};

export default GuildStats;
