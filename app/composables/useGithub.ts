export const useGithub = () => {
    const profile = ref<any>(null)
    const repos = ref<any[]>([])

    // Hardcoded fallback for profile if API fails or rate limited
    const fallbackProfile = {
        name: 'Albino M. Santos',
        login: 'Cr0wtl3r',
        bio: 'Offensive Security | Pentest | IAM',
        avatar_url: 'https://avatars.githubusercontent.com/u/108479576?v=4',
        html_url: 'https://github.com/cr0wtl3r'
    }

    const fetchProfile = async () => {
        try {
            const { data, error } = await useFetch('https://api.github.com/users/cr0wtl3r')
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
            const { data, error } = await useFetch('https://api.github.com/users/cr0wtl3r/repos?sort=updated&per_page=7')
            if (error.value || !data.value) {
                repos.value = []
            } else {
                repos.value = (data.value as any[]).filter(r => !r.fork).slice(0, 8) // Filter forks, take top 6
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
