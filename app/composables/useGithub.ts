export interface GithubProfile {
    name: string
    login: string
    bio: string | null
    avatar_url: string
    html_url: string
}

export interface GithubRepo {
    id: number
    name: string
    description: string | null
    html_url: string
    language: string | null
    stargazers_count: number
    forks_count: number
    fork: boolean
}

export const useGithub = () => {
    const profile = ref<GithubProfile | null>(null)
    const repos = ref<GithubRepo[]>([])

    const fallbackProfile: GithubProfile = {
        name: 'Albino M. Santos',
        login: 'Cr0wtl3r',
        bio: 'Offensive Security | Pentest | IAM',
        avatar_url: 'https://avatars.githubusercontent.com/u/108479576?v=4',
        html_url: 'https://github.com/cr0wtl3r'
    }

    const fetchProfile = async () => {
        try {
            const { data, error } = await useFetch<GithubProfile>('https://api.github.com/users/cr0wtl3r')
            if (error.value || !data.value) {
                profile.value = fallbackProfile
            } else {
                profile.value = data.value
            }
        } catch (e) {
            console.error("Github Profile Fetch Error", e)
            profile.value = fallbackProfile
        }
    }

    const fetchRepos = async () => {
        try {
            const { data, error } = await useFetch<GithubRepo[]>('https://api.github.com/users/cr0wtl3r/repos?sort=updated&per_page=8')
            if (error.value || !data.value) {
                repos.value = []
            } else {
                repos.value = data.value.filter(r => !r.fork).slice(0, 8)
            }
        } catch (e) {
            console.error("Github Repos Fetch Error", e)
            repos.value = []
        }
    }

    return {
        profile,
        repos,
        fetchProfile,
        fetchRepos
    }
}
